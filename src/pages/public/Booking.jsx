import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Banner } from "../../components/Banner";
import { StepPassenger } from "../../components/steps/StepPassenger";
import { StepPayment } from "../../components/steps/StepPayment";


export const Booking = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: "", email: "", tickets: 1, payment: "card" });

  const next = () => setStep((s) => Math.min(2, s + 1));
  const prev = () => setStep((s) => Math.max(1, s - 1));

  const variants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  return (
    <>
      <Banner />
      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div key="step2" variants={variants} initial="initial" animate="animate" exit="exit">
            <StepPassenger formData={formData} setFormData={setFormData} next={next} />
          </motion.div>
        )}

        {step === 2 && (
          <motion.div key="step3" variants={variants} initial="initial" animate="animate" exit="exit">
            <StepPayment formData={formData} setFormData={setFormData} next={next} prev={prev} />
          </motion.div>
        )}

        {/* {step === 4 && (
          <motion.div key="step4" variants={variants} initial="initial" animate="animate" exit="exit">
            <StepRecap formData={formData} next={next} prev={prev} />
          </motion.div>
        )} */}
      </AnimatePresence>
      {/* <BookingPage /> */}
    </>
  )
}