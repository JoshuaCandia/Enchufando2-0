import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
};

const faqdata = [
  {
    question: "¿Cuentan con stock de productos?",
    answer:
      "Sí, contamos con stock de todos nuestros productos, no importa cuando leas esto.",
  },
  {
    question: "¿Hacen envíos al interior del país?",
    answer: "Sí, hacemos envíos a todo el país.",
  },
  {
    question: "¿Cuánto tiempo demora el envío?",
    answer:
      "El tiempo de envío depende de la distancia y del tipo de envío que elijas. Por lo general, los envíos estándar demoran entre 3 y 5 días hábiles, y los envíos express demoran entre 1 y 2 días hábiles.",
  },
  {
    question: "¿Puedo hablar con un representante de ventas?",
    answer:
      "Sí, puedes contactarnos por teléfono o por correo electrónico, y un representante de ventas te atenderá enseguida.",
  },
];

export default Faq;
