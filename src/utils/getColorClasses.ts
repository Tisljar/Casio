export const getColorClasses = (color: string) => {
    switch (color) {
      case 'green':
        return { bgColor: 'bg-green-500', borderColor: 'border-green-300' };
      case 'white':
        return { bgColor: 'bg-gray-100', borderColor: 'border-gray-300' };
      case 'black':
        return { bgColor: 'bg-gray-900', borderColor: 'border-gray-600' };
      case 'purple':
        return { bgColor: 'bg-purple-400', borderColor: 'border-purple-200' };
      case 'blue':
        return { bgColor: 'bg-blue-400', borderColor: 'border-blue-200' };
      default:
        return { bgColor: 'bg-gray-500', borderColor: 'border-gray-300' }; // Fallback for unexpected colors
    }
  };