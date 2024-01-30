"use client";
// pages/MerchantPage.tsx

import { useEffect, useState } from 'react';
import Merchant from '../../models/Merchant';
import dynamic from 'next/dynamic';
// Import the MerchantRepository dynamically to ensure it runs on the client side
const MerchantRepository = dynamic(() => import('../../repositories/MerchantRepository'), { ssr: false });


const merchantRepository = new MerchantRepository();

const MerchantPage: React.FC = () => {
  const [merchants, setMerchants] = useState<Merchant[]>([]);
  const [merchantId, setMerchantId] = useState<string>('');
  const [newMerchantName, setNewMerchantName] = useState<string>('NewMerchant');

  const fetchMerchants = async () => {
    try {
      const merchantList = await merchantRepository.listMerchants();
      setMerchants(merchantList);
    } catch (error) {
      console.error('Error fetching merchants:', error);
    }
  };

  const handleAddMerchant = async () => {
    try {
      const newMerchant = new Merchant(newMerchantName, '1234567890');
      const merchantId = await merchantRepository.addMerchant(newMerchant);
      console.log('Merchant added with ID:', merchantId);
      fetchMerchants();
    } catch (error) {
      console.error('Error adding merchant:', error);
    }
  };

  const handleGetMerchant = async () => {
    try {
      const merchant = await merchantRepository.getMerchant(merchantId);
      console.log('Merchant retrieved:', merchant);
    } catch (error) {
      console.error('Error getting merchant:', error);
    }
  };

  const handleDeleteMerchant = async () => {
    try {
      await merchantRepository.deleteMerchant(merchantId);
      console.log('Merchant deleted with ID:', merchantId);
      fetchMerchants();
    } catch (error) {
      console.error('Error deleting merchant:', error);
    }
  };

  useEffect(() => {
    // Check if IndexedDB is available (client side)
    if (typeof window !== 'undefined' && window.indexedDB) {
      fetchMerchants();
    }
  }, []);

  return (
    <div>
      <h1>Merchant Page</h1>
      <div>
        <h2>Merchants:</h2>
        <ul>
          {merchants.map((merchant) => (
            <li key={merchant.id}>{merchant.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Add Merchant:</h2>
        <button onClick={handleAddMerchant}>Add Merchant</button>
      </div>
      <div>
        <h2>Get Merchant:</h2>
        <label>
          Merchant ID:
          <input
            type="text"
            value={merchantId}
            onChange={(e) => setMerchantId(e.target.value)}
          />
        </label>
        <button onClick={handleGetMerchant}>Get Merchant</button>
      </div>
      <div>
        <h2>Delete Merchant:</h2>
        <label>
          Merchant ID:
          <input
            type="text"
            value={merchantId}
            onChange={(e) => setMerchantId(e.target.value)}
          />
        </label>
        <button onClick={handleDeleteMerchant}>Delete Merchant</button>
      </div>
    </div>
  );
};

export default MerchantPage;