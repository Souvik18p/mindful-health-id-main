
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, Shield, Salad, Activity } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <ScrollArea className="h-screen w-full bg-gradient-to-b from-secondary to-white">
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="container px-4 pt-20 pb-16 md:pt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6"
          >
            <span className="px-4 py-2 rounded-full bg-accent-light text-accent inline-block mb-4 animate-fade-in">
              Revolutionizing Health Management
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight">
              Your Health Identity,{" "}
              <span className="text-primary">Secured by Blockchain</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Create your secure Global Health ID and get personalized diet plans tailored
              to your unique health profile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                size="lg" 
                className="group" 
                onClick={() => navigate('/create-health-id')}
              >
                Create Health ID
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="container px-4 py-16">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 backdrop-blur-sm bg-card/80 border-0 shadow-lg">
                <Shield className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Secure Identity</h3>
                <p className="text-muted-foreground">
                  Your health data is encrypted and secured using blockchain technology.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 backdrop-blur-sm bg-card/80 border-0 shadow-lg">
                <Salad className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Personalized Diet</h3>
                <p className="text-muted-foreground">
                  Get AI-powered diet recommendations based on your health profile.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 backdrop-blur-sm bg-card/80 border-0 shadow-lg">
                <Activity className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Health Tracking</h3>
                <p className="text-muted-foreground">
                  Monitor your progress and health metrics in real-time.
                </p>
              </Card>
            </motion.div>
          </div>
        </section>
      </div>
    </ScrollArea>
  );
};

export default Index;
