import Image from "next/image";

const notFound = () => {
    return (
        <div className="size-full h-screen text-center font-bold text-2xl text-second flex flex-col gap-y-1 items-center justify-center bg-main ">
            Page not found 404.
        </div>
    );
}

export default notFound;