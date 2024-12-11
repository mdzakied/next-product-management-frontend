import Image from "next/image";

export default function User() {
  return (
    <section
      id="userSection"
      className="flex  flex-col items-center justify-center"
    >
      <div className="flex items-center justify-center text-center">
        <Image
          src="/Maintenance-pana.png"
          alt="maintenance-img"
          className="w-auto max-w-full" // Ensures image is responsive
          width={400}
          height={300}
          priority
        />
      </div>
      <div className="text-center text-black dark:text-white">
        <h1>Under Maintenance, Please come back later</h1>
      </div>
    </section>
  );
}
