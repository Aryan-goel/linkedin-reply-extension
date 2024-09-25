// content.js

// Inject a custom style tag into the LinkedIn page to control modal size
function injectCustomStyles() {
    const style = document.createElement('style');
    style.innerHTML = `
    /* Increase the size of the modal */
    .extension-modal {
      width: 500px !important;  /* Modify as needed */
      height: auto !important;
      max-height: 600px !important;
      padding: 20px !important;
    }

    /* Optional: Make sure the modal is centered */
    .extension-modal-container {
      display: flex;
      align-items: center;
      justify-content: center;
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 9999;  /* Ensure it appears above other content */
    }
  `;
    document.head.appendChild(style);
}

// Function to inject the modal
function injectModal() {
    const existingModal = document.querySelector('.extension-modal-container');
    if (!existingModal) {
        const modalContainer = document.createElement('div');
        modalContainer.classList.add('extension-modal-container');

        const modalContent = `
      <div class="extension-modal bg-white rounded-lg shadow-lg">
        <h2 class="text-2xl font-bold mb-4">Generate Reply</h2>
        <textarea
          class="w-full p-4 mb-4 border rounded"
          rows="6"
          placeholder="Type your command here..."
        ></textarea>
        <div class="flex justify-end space-x-4">
          <button
            class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            id="insertButton"
          >
            Insert
          </button>
          <button
            class="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            id="closeButton"
          >
            Close
          </button>
        </div>
      </div>
    `;

        modalContainer.innerHTML = modalContent;
        document.body.appendChild(modalContainer);

        // Handle modal close event
        document.getElementById('closeButton').addEventListener('click', () => {
            modalContainer.remove();
        });

        // Handle modal insert event
        document.getElementById('insertButton').addEventListener('click', () => {
            const textArea = document.querySelector('textarea');
            const message = textArea.value || "Thank you for the opportunity!";
            const linkedInMessageInput = document.querySelector('textarea[placeholder="Start typing your message..."]');
            if (linkedInMessageInput) {
                linkedInMessageInput.value = message;
            }
            modalContainer.remove();
        });
    }
}

// Inject styles on page load
injectCustomStyles();

// Open the modal on demand (e.g., on a keyboard shortcut, or by triggering from the extension)
injectModal();
