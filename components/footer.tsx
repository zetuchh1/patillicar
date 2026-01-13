import { Instagram, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center gap-2">
            <h3 className="text-3xl font-bold">
              Patili<span className="text-primary">Car</span>
            </h3>
          </div>

          <p className="text-secondary-foreground/80 max-w-md mx-auto leading-relaxed">
            Evcil dostlarınızın güvenli ve konforlu yolculuğu için her zaman yanınızdayız
          </p>

          <div className="flex justify-center gap-4">
            <a
              href="https://instagram.com/patilicar"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-primary/10 hover:bg-primary/20 rounded-xl flex items-center justify-center transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-primary" />
            </a>
          </div>

          <div className="border-t border-secondary-foreground/10 pt-6">
            <p className="text-sm text-secondary-foreground/60 flex items-center justify-center gap-2">
              Made with <Heart className="w-4 h-4 text-primary fill-primary" /> for all pets
            </p>
            <p className="text-xs text-secondary-foreground/50 mt-2">
              © {new Date().getFullYear()} PatiliCar. Tüm hakları saklıdır.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
