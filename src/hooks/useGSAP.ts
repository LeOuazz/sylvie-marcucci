'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export function useGSAP() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    // Basic fade in animation
    gsap.fromTo(
      element,
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        ease: 'power2.out',
        delay: 0.2 
      }
    )

    return () => {
      gsap.killTweensOf(element)
    }
  }, [])

  return ref
}

export function useScrollAnimation(trigger: string, animation: gsap.TweenVars) {
  useEffect(() => {
    if (typeof window === 'undefined') return

    const elements = document.querySelectorAll(trigger)
    
    elements.forEach((element) => {
      gsap.fromTo(element, animation.from || {}, animation.to || {})
    })

    return () => {
      gsap.killTweensOf(trigger)
    }
  }, [trigger, animation])
}