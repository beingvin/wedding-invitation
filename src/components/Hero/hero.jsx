import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden flex items-center justify-center">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1519741497674-611481863552)"
        }}
      />

      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative text-center px-6"
      >

        <p className="tracking-[8px] uppercase text-yellow-400">
          Together With Their Families
        </p>

        <h1 className="text-7xl font-serif mt-10">
          Ramling
        </h1>

        <div className="text-yellow-400 text-5xl my-5">
          ♥
        </div>

        <h1 className="text-7xl font-serif">
          Veda
        </h1>

        <p className="mt-10 text-xl text-gray-200">
          Invite You To Celebrate Their Wedding
        </p>

        <button
          className="mt-12 px-10 py-4 border border-yellow-400 rounded-full
          hover:bg-yellow-500 hover:text-black duration-300"
        >
          Open Invitation
        </button>

      </motion.div>

    </section>
  );
}