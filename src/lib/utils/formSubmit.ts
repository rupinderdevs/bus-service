// utils.ts
export const submitForm = async (formData: FormData): Promise<void> => {
    try {
      const response = await fetch('https://api.staticforms.xyz/submit', {
        method: 'POST',
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error('Form submission failed');
      }
  
      // You can handle the response if needed
      const result = await response.json();
      console.log('Form submission successful:', result);
    } catch (error) {
      throw new Error(`Form submission failed: ${error.message}`);
    }
  };
  