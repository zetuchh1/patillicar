"use client"

import { useEffect, useState } from "react"

interface Paw {
  id: number
  left: string
  top: string
  delay: number
  type: "cat" | "dog"
  animationDuration: number
}

export function PawPrints() {
  const [paws, setPaws] = useState<Paw[]>([])

  useEffect(() => {
    const newPaws: Paw[] = []
    for (let i = 0; i < 20; i++) {
      newPaws.push({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: Math.random() * 5,
        type: Math.random() > 0.5 ? "cat" : "dog",
        animationDuration: 6 + Math.random() * 4,
      })
    }
    setPaws(newPaws)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {paws.map((paw) => (
        <div
          key={paw.id}
          className="absolute animate-float-paw"
          style={{
            left: paw.left,
            top: paw.top,
            animationDelay: `${paw.delay}s`,
            animationDuration: `${paw.animationDuration}s`,
          }}
        >
          <PawIcon type={paw.type} />
        </div>
      ))}
    </div>
  )
}

function PawIcon({ type }: { type: "cat" | "dog" }) {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="currentColor"
      className={type === "cat" ? "text-primary/30" : "text-secondary/30"}
    >
      {/* Ana pati */}
      <ellipse cx="25" cy="32" rx="9" ry="11" opacity="0.8" />

      {/* Üst sol parmak */}
      <ellipse cx="13" cy="20" rx="5" ry="7" opacity="0.8" />

      {/* Üst orta sol parmak */}
      <ellipse cx="20" cy="15" rx="5" ry="7" opacity="0.8" />

      {/* Üst orta sağ parmak */}
      <ellipse cx="30" cy="15" rx="5" ry="7" opacity="0.8" />

      {/* Üst sağ parmak */}
      <ellipse cx="37" cy="20" rx="5" ry="7" opacity="0.8" />
    </svg>
  )
}
