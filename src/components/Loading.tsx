// components/Loading.tsx
const Loading = () => {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-white z-[99]">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#1C1C1C] border-t-transparent" />
      </div>
    );
  };
  
  export default Loading;
  