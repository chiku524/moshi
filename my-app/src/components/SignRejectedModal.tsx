export const SignRejectedModal = () => {

  return (
    <section>
      <div id="sign-modal" className='bg-slate-900 bg-opacity-70 w-screen h-screen absolute top-0 left-0 flex justify-center items-center'>
        <div className='bg-red-200 rounded-3xl w-1/4 h-1/3 flex flex-col justify-center items-center'>
            <span className='text-violet-700 hover:cursor-pointer hover:bg-lime-500 hover:bg-opacity-50 hover:rounded w-full flex justify-center'>Please sign message to activate the connection of wallet.</span>
        </div>
      </div>
    </section>
  );
};
