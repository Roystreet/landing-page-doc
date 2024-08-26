'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Check, Menu, X, FileText, Brain, Globe } from "lucide-react"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const features = [
    { icon: FileText, text: "Procesamiento de documentos" },
    { icon: Brain, text: "IA avanzada de comprensión" },
    { icon: Globe, text: "Soporte multilingüe" }
  ]

  const sections = [
    { title: "Características", id: "features" },
    { title: "Cómo funciona", id: "how-it-works" },
    { title: "Precios", id: "pricing" },
  ]

  return (
    <div className="relative flex flex-col min-h-screen bg-gradient-to-br from-blue-600 via-indigo-500 to-purple-500 text-white overflow-hidden">
      <div className="absolute inset-0 z-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 z-10 bg-[url('/placeholder.svg?height=600&width=800')] bg-repeat opacity-5"></div>
      
      <header className="relative z-20 container mx-auto flex justify-between items-center px-4 py-6">
        <div className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Docnexo AI
        </div>
        <nav className="hidden md:flex space-x-8">
          {sections.map((section) => (
            <a key={section.id} href={`#${section.id}`} className="text-lg font-medium hover:text-blue-300 transition-colors duration-300">
              {section.title}
            </a>
          ))}
        </nav>
        <Button 
          className="md:hidden"
          variant="ghost" 
          size="icon"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </Button>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 z-30 bg-black bg-opacity-50">
          <div className="fixed top-0 right-0 bottom-0 w-64 p-4 bg-gradient-to-b from-blue-800 to-purple-700">
            <Button 
              className="absolute top-4 right-4" 
              variant="ghost" 
              size="icon"
              onClick={() => setIsMenuOpen(false)}
            >
              <X />
            </Button>
            <nav className="mt-16 flex flex-col space-y-4">
              {sections.map((section) => (
                <a key={section.id} href={`#${section.id}`} className="text-lg font-medium hover:text-blue-300 transition-colors duration-300">
                  {section.title}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}

      <main className="relative z-20 flex-grow container mx-auto px-4 py-12 flex flex-col items-center">
        <section className="text-center mb-20">
          <h1 className="text-6xl md:text-7xl font-black mb-6 animate-fade-in-up">
            Revoluciona tu
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Gestión Documental
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Potencia tu análisis de documentos con IA avanzada entrenada para comprender y procesar información compleja.
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-12 animate-fade-in-up animation-delay-400">
            <Input 
              placeholder="Ingresa tu email de trabajo" 
              className="w-full md:w-64 bg-white bg-opacity-20 border-none placeholder-gray-300" 
            />
            <Button className="bg-blue-400 text-gray-900 hover:bg-blue-300 transition-all duration-300 transform hover:scale-105">
              Prueba gratis <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>

        <section id="features" className="w-full mb-20">
          <h2 className="text-4xl font-bold mb-10 text-center">Características principales</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left animate-fade-in-up animation-delay-600">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center bg-white bg-opacity-10 rounded-lg p-6 transform transition-all duration-300 hover:scale-105 hover:bg-opacity-20">
                <feature.icon className="mr-4 h-8 w-8 text-blue-400" />
                <span className="text-lg">{feature.text}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="how-it-works" className="w-full mb-20">
          <h2 className="text-4xl font-bold mb-10 text-center">Cómo funciona</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {["Sube tus documentos", "Procesamiento IA", "Resultados inteligentes", "Integración perfecta"].map((title, index) => (
              <div key={index} className="bg-white bg-opacity-10 rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-4">{index + 1}. {title}</h3>
                <p>{index === 0 ? "Carga fácilmente tus archivos PDF, Word, o imágenes escaneadas a nuestra plataforma segura." :
                    index === 1 ? "Nuestra IA avanzada analiza y extrae información clave de tus documentos en segundos." :
                    index === 2 ? "Obtén resúmenes, insights y datos estructurados listos para ser utilizados en tu flujo de trabajo." :
                    "Conecta Docnexo AI con tus herramientas existentes para una experiencia de trabajo fluida."}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="pricing" className="w-full mb-20">
          <h2 className="text-4xl font-bold mb-10 text-center">Planes y precios</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Básico", price: "$29/mes", features: ["100 documentos/mes", "Soporte por email", "Exportación básica"], bgClass: "bg-opacity-10" },
              { title: "Pro", price: "$99/mes", features: ["1000 documentos/mes", "Soporte prioritario", "Exportación avanzada", "API access"], bgClass: "bg-opacity-20 border-2 border-blue-400 transform scale-105" },
              { title: "Empresa", price: "Personalizado", features: ["Volumen ilimitado", "Soporte 24/7", "Personalización completa", "Integración a medida"], bgClass: "bg-opacity-10" }
            ].map((plan, index) => (
              <div key={index} className={`bg-white ${plan.bgClass} rounded-lg p-6 flex flex-col`}>
                <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>
                <p className="text-4xl font-bold mb-4">{plan.price}</p>
                <ul className="mb-6 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center mb-2">
                      <Check className="mr-2 h-5 w-5 text-green-400" /> {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-blue-400 text-gray-900 hover:bg-blue-300">
                  {plan.title === "Empresa" ? "Contactar ventas" : "Elegir plan"}
                </Button>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="relative z-20 container mx-auto px-4 py-6 text-center text-gray-300">
        © 2023 Docnexo AI. Todos los derechos reservados.
      </footer>
    </div>
  )
}
