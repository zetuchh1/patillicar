"use client"

import { Card } from "@/components/ui/card"
import { Heart, Video, Utensils } from "lucide-react"

export function About() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            PatiliCar <span className="text-primary">Nedir?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Uzaktan kumandalı özel tasarım aracımızla sokak köpeklerine ve kedilere mama ulaştırıyor, hayvanseverliği
            artırmak ve sokak hayvanlarının aç kalmamasını sağlamak için çalışıyoruz
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 bg-card">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-card-foreground">Hayvanseverlik</h3>
            <p className="text-muted-foreground leading-relaxed">
              Sokak hayvanlarına sevgi ve şefkat göstererek farkındalık yaratıyoruz
            </p>
          </Card>

          <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 bg-card">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Utensils className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-card-foreground">Mama Yardımı</h3>
            <p className="text-muted-foreground leading-relaxed">
              Uzaktan kumandalı aracımızla sokak hayvanlarına güvenli şekilde mama ulaştırıyoruz
            </p>
          </Card>

          <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 bg-card">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Video className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-card-foreground">Video İçerik</h3>
            <p className="text-muted-foreground leading-relaxed">
              Yaptığımız yardımları videoya alıp paylaşarak daha fazla insana ilham veriyoruz
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
