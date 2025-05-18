import React from 'react';
import Modal from '../UI/Modal';
import useStore from '../../store/useStore';

const AllNotificationsModal = ({ isOpen, onClose }) => {
  const { notifications, isLoading } = useStore();
  
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="ALL NOTIFICATIONS" width="lg">
      <div className="space-y-6">
        {isLoading ? (
          <div className="text-center py-4">Loading notifications...</div>
        ) : notifications.length === 0 ? (
          <div className="text-center py-4">No notifications</div>
        ) : (
          notifications.map(notification => (
            <div 
              key={notification.id}
              className="bg-white p-4 rounded-lg shadow border border-gray-200"
            >
              <div className="flex items-start">
                <div className="w-3 h-3 mt-2 mr-3 rounded-full bg-blue-400 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-medium text-navy-900">
                    {notification.title}
                  </h3>
                  <p className="mt-1 text-gray-600">
                    {notification.description}
                  </p>
                  <div className="mt-2 text-sm text-gray-500">
                    {new Date(notification.createdAt).toLocaleDateString()}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </Modal>
  );
};

export default AllNotificationsModal;