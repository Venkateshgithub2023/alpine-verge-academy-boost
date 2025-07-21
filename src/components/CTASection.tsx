import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            {/* Icon */}
            <div className="flex justify-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center animate-float">
                <Rocket size={40} className="text-white" />
              </div>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Ready to Transform Your Future?
              </h2>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                Join Alpine Verge today and start your journey towards mastering the skills 
                that will accelerate your career and unlock endless opportunities.
              </p>
            </div>

            {/* Special Offer */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto">
              <h3 className="text-2xl font-bold text-white mb-2">Limited Time Offer!</h3>
              <p className="text-white/90 mb-4">Get 50% off your first course</p>
              <div className="text-sm text-white/80">Use code: ALPINEVERGE50</div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button variant="default" size="lg" className="bg-white text-background hover:bg-white/90 text-lg px-8 py-4">
                <ArrowRight className="mr-2" size={20} />
                Start Learning Today
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 text-lg px-8 py-4">
                Browse Free Courses
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 text-center">
              <p className="text-white/80 text-sm mb-4">
                Trusted by students from 150+ countries
              </p>
              <div className="flex justify-center items-center space-x-8 text-white/60">
                <span>✓ 30-day money-back guarantee</span>
                <span>✓ Lifetime access</span>
                <span>✓ Certificate of completion</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;