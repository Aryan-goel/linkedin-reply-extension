import React, { FC } from "react";

interface ModalProps {
    onClose: () => void;
    onInsert: (text: string) => void;
}

const Modal: FC<ModalProps> = ({ onClose, onInsert }) => {
    const handleInsert = () => {
        const dummyResponse = "Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask.";
        onInsert(dummyResponse);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full h-auto">
                <h2 className="text-2xl font-bold mb-4">Generate Reply</h2>
                <textarea
                    className="w-full p-4 mb-4 border rounded"
                    rows={6}
                    placeholder="Type your command here..."
                ></textarea>
                <div className="flex justify-end space-x-4">
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        onClick={handleInsert}
                    >
                        Insert
                    </button>
                    <button
                        className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
