"use client"

import { Card } from "@/components/ui/card"
import { Camera, Radio, Smile, Users } from "lucide-react"

export function Features() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Nasıl <span className="text-primary">Çalışıyoruz?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Özel tasarım uzaktan kumandalı aracımız ile sokak hayvanlarına güvenle yardım ediyoruz
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Card className="p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary bg-card">
            <Radio className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-lg font-bold mb-2 text-card-foreground">Uzaktan Kumanda</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              RC araç teknolojisi ile güvenli mesafeden mama dağıtımı
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary bg-card">
            <Camera className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-lg font-bold mb-2 text-card-foreground">Video Çekimi</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Hayvanlarla etkileşimimizi kayıt altına alıp paylaşıyoruz
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary bg-card">
            <Smile className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-lg font-bold mb-2 text-card-foreground">Mutlu Patiler</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Aç kalan sokak hayvanlarına ulaşarak onları mutlu ediyoruz
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary bg-card">
            <Users className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-lg font-bold mb-2 text-card-foreground">Farkındalık</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Toplumda hayvanseverliği artırmak için çalışıyoruz
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
