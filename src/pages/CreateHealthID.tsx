
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import HealthIDForm from "@/components/HealthIDForm";

const CreateHealthID = () => {
  return (
    <ScrollArea className="h-screen w-full bg-gradient-to-b from-secondary to-white">
      <div className="min-h-screen">
        <section className="container px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl font-bold text-center mb-8">Create Health ID</h1>
            <HealthIDForm />
          </motion.div>
        </section>
      </div>
    </ScrollArea>
  );
};

export default CreateHealthID;
