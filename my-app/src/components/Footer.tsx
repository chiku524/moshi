// import { useAppDispatch, useAppSelector } from "@/lib/hooks";

export const Footer = () => {
    //   const dispatch = useAppDispatch();
    
      return (
        <footer className="flex items-center w-screen h-20 bottom-0 fixed bg-slate-950 med:border-l-2 med:border-violet-600">
            <div className="flex flex-row items-center justify-between w-full text-violet-600">
                <h3 className="pl-20 md:pl-4">Moshi &copy; 2024</h3>
                <div className="flex flex-col m-auto pr-10 md:pr-0">
                    <h5>Terms of Service</h5>
                    <h5>Privacy Policy</h5>
                </div>
            </div>
        </footer>
      );
    };
    