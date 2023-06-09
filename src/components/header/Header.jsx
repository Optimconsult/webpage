export function Header() {
  return (
    <header className="flex justify-center pt-32 lg:pt-0 md:items-center bg-bgHeader shadow-shadowHeader md:rounded-[70px] h-[583px] max-h-[583px] md:mx-6 lg:mx-0 bg-cover bg-center">
      <div className="block text-center space-y-6 md:space-y-8 lg:space-y-0">
        <h2 className="text-white text-3xl md:text-3xl lg:text-4xl font-semibold">
          Optim Consult SAS
        </h2>
        <h1 className="text-white text-[3em] leading-[50px] md:px-4 lg:text-7xl font-extrabold lg:leading-snug">
          Consultoría Socio Ambiental Estratégica
        </h1>
      </div>
    </header>
  );
}
