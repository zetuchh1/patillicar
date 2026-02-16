"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Instagram, Mail, Phone, CheckCircle } from "lucide-react"
import emailjs from "@emailjs/browser"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [showSuccess, setShowSuccess] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // EmailJS ile e-posta gönderimi
      await emailjs.send(
        "service_irmuikg", // Service ID
        "template_lur083q", // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
          to_email: "barissxxd23@mail.com", // Alıcı e-posta
        },
        "oQbgIT1Mqh4_MiNlL", // Public Key
      )

      // Başarılı mesajı göster
      setShowSuccess(true)
      setFormData({ name: "", email: "", phone: "", message: "" })

      // 5 saniye sonra mesajı gizle
      setTimeout(() => {
        setShowSuccess(false)
      }, 5000)
    } catch (error) {
      console.error("EmailJS error:", error)
      alert("Mesaj gönderilemedi. Lütfen tekrar deneyin.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Bize <span className="text-primary">Ulaşın</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Projemize destek olmak, işbirliği yapmak veya bize ulaşmak için iletişime geçin
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <Card className="p-8 bg-card">
              {showSuccess && (
                <Alert className="mb-6 bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800">
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                  <AlertDescription className="text-green-800 dark:text-green-200 font-medium">
                    Mesajınız alındı!
                  </AlertDescription>
                </Alert>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2 text-card-foreground">
                    Adınız
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full"
                    placeholder="Adınızı girin"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2 text-card-foreground">
                    E-posta
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full"
                    placeholder="ornek@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold mb-2 text-card-foreground">
                    Telefon
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full"
                    placeholder="0555 555 55 55"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2 text-card-foreground">
                    Mesajınız
                  </label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full min-h-32"
                    placeholder="Mesajınızı yazın..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-lg rounded-xl"
                >
                  {isSubmitting ? "Gönderiliyor..." : "Mesaj Gönder"}
                </Button>
              </form>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="p-6 hover:shadow-lg transition-all duration-300 bg-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Instagram className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-2 text-card-foreground">Instagram</h3>
                  <a
                    href="https://instagram.com/patilicar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    @patilicar
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">Videolarımızı ve paylaşımlarımızı takip edin</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 bg-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-2 text-card-foreground">E-posta</h3>
                  <a href="mailto:info@patilicar.com" className="text-primary hover:underline break-all">
                    info@patilicar.com
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">Destek ve işbirliği için yazın</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 bg-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-2 text-card-foreground">Telefon</h3>
                  <a href="tel:+905551234567" className="text-primary hover:underline">
                    +90 555 123 45 67
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">Bize ulaşabilirsiniz</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
