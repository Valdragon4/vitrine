'use client';

const Hero = () => {
  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      {/* Background moderne avec effets dynamiques */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Dégradés flottants animés */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-violet-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-indigo-400/20 to-violet-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-300/10 via-violet-400/10 to-indigo-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Formes géométriques modernes */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-violet-200/40 to-purple-300/40 rounded-3xl rotate-12 backdrop-blur-sm"></div>
        <div className="absolute top-40 right-20 w-20 h-20 bg-gradient-to-br from-indigo-200/50 to-violet-300/50 rounded-2xl -rotate-12 backdrop-blur-sm"></div>
        <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-gradient-to-br from-purple-200/40 to-indigo-300/40 rounded-full backdrop-blur-sm"></div>
        <div className="absolute bottom-20 right-1/3 w-16 h-16 bg-gradient-to-br from-violet-300/50 to-purple-400/50 rounded-xl rotate-45 backdrop-blur-sm"></div>
        
        {/* Particules flottantes */}
        <div className="absolute top-1/4 left-1/5 w-2 h-2 bg-violet-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-500 rounded-full animate-ping opacity-40 delay-700"></div>
        <div className="absolute top-2/3 left-2/3 w-1.5 h-1.5 bg-indigo-400 rounded-full animate-ping opacity-50 delay-1000"></div>
        
        {/* Grille moderne avec effet de profondeur */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Badge moderne */}
        <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm border border-violet-200 rounded-full text-sm font-medium text-violet-700 mb-8 shadow-sm">
          <span className="w-2 h-2 bg-violet-500 rounded-full mr-2 animate-pulse"></span>
          Disponible pour vos projets
        </div>
        
        {/* Nom et titre */}
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">Valentin</span> MAROT
        </h1>
        
        {/* Phrase d'accroche */}
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
          Développeur web & DevOps – Solutions sur mesure pour entreprises et associations
        </p>
        
        {/* Description */}
        <div className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto space-y-4">
          <p>
            J'accompagne les entreprises et associations dans la création de solutions numériques adaptées à leurs besoins.
          </p>
        </div>
        
        {/* Boutons CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="group relative bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span className="relative z-10">Me contacter</span>
            <div className="absolute inset-0 bg-gradient-to-r from-violet-700 to-purple-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <button
            onClick={() => {
              const element = document.querySelector('#a-propos');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-8 py-4 border-2 border-gray-300 hover:border-violet-600 text-gray-700 hover:text-violet-600 rounded-2xl text-lg font-semibold transition-all duration-300 bg-white/50 backdrop-blur-sm hover:bg-white/80"
          >
            En savoir plus
          </button>
        </div>
        

      </div>
    </section>
  );
};

export default Hero;
