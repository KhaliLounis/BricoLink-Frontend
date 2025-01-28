import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback } from "react";

interface ProfileRealizationsProps {
  realizations: Realization[] | undefined;
}

export function ProfileRealizations({
  realizations,
}: ProfileRealizationsProps) {
  const [selectedRealization, setSelectedRealization] = useState<
    string | null | undefined
  >(null);

  const closeModal = useCallback(() => {
    setSelectedRealization(null);
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Realizations</CardTitle>
      </CardHeader>
      <CardContent>
        {!realizations || realizations.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500 mb-4">No realizations available</p>
            <Button variant="outline" size="sm">
              <Plus className="mr-2 h-4 w-4" /> Add Realization
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {realizations.map((realization) => (
              <motion.div
                key={realization.realisation_id}
                className="relative aspect-square cursor-pointer overflow-hidden rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                onClick={() =>
                  setSelectedRealization(realization.realisation_id)
                }
              >
                <Image
                  src={realization.image_url || "/placeholder.svg"}
                  alt="Realization"
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
            <motion.div
              className="relative aspect-square cursor-pointer overflow-hidden rounded-lg bg-gray-100 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <Button
                variant="ghost"
                size="sm"
                className="absolute inset-0 w-full h-full"
              >
                <Plus className="h-8 w-8" />
              </Button>
            </motion.div>
          </div>
        )}
      </CardContent>
      <AnimatePresence>
        {selectedRealization && realizations && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-3xl w-full m-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                variant="secondary"
                size="icon"
                className="absolute -top-2 -right-2 rounded-full z-10 bg-white text-gray-800 hover:bg-gray-200"
                onClick={closeModal}
              >
                <X className="h-6 w-6" />
              </Button>
              <Image
                src={
                  realizations.find(
                    (r) => r.realisation_id === selectedRealization,
                  )?.image_url || "/placeholder.svg"
                }
                alt="Full size realization"
                width={1200}
                height={800}
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
}
