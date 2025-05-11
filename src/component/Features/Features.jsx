import "./Features.css";
import { LuMessageSquareWarning } from "react-icons/lu";
import { IoIosWater } from "react-icons/io";
import { IoMdNuclear } from "react-icons/io";
import { LuAlarmSmoke } from "react-icons/lu";
import { Accordion } from "flowbite-react";
const Features = () => {
  return (
    <div className="pb-10" id="features">
      <div className="flex justify-center items-center pt-16 pb-16">
        <div className="h-px w-10 bg-black mr-1"></div>
        <h2 className="text-center poppins-font text-3xl font-bold">
          Features
        </h2>
        <div className="h-px w-10 bg-black ml-1"></div>
      </div>
      <div className="md:grid grid-cols-2 gap-6 px-8 poppins">
        <div className="border-solid border border-grey-400 p-4 rounded-md mt-4 md:mt-0">
          <LuMessageSquareWarning className="text-4xl" />
          <h4 className="font-bold pt-14 text-lg">
            Real-Time SMS Alerts with Fire Location
          </h4>
          <p className="pt-6 font-semibold text-gray-600">
            Receive instant notifications on your phone with the exact location
            of the fire outbreak, enabling faster response and coordination with
            emergency services.
          </p>
        </div>
        <div className="border-solid border border-grey-400 p-4 rounded-md mt-4 md:mt-0">
          <IoIosWater className="text-4xl" />
          <h4 className="font-bold pt-14 text-lg">
            Automated Sprinkler System
          </h4>
          <p className="pt-6 font-semibold text-gray-600">
            Integrated sprinklers activate immediately upon detecting a fire,
            working efficiently to suppress flames and minimize damage.
          </p>
        </div>
        <div className="border-solid border border-grey-400 p-4 rounded-md mt-4 md:mt-0">
          <IoMdNuclear className="text-4xl" />
          <h4 className="font-bold pt-14 text-lg">Advanced Gas Detection</h4>
          <p className="pt-6 font-semibold text-gray-600">
            Detects harmful gases like carbon monoxide and natural gas leaks,
            alerting you before they become hazardous.
          </p>
        </div>
        <div className="border-solid border border-grey-400 p-4 rounded-md mt-4 md:mt-0">
          <LuAlarmSmoke className="text-4xl" />
          <h4 className="font-bold pt-14 text-lg">Loud Alarm System</h4>
          <p className="pt-6 font-semibold text-gray-600">
            A high-decibel alarm sounds at the first sign of danger, ensuring
            everyone in the vicinity is warned and can evacuate promptly.
          </p>
        </div>
      </div>
      <div className="">
      <div className="flex justify-center items-center pt-16 pb-16">
        <div className="h-px w-10 bg-black mr-1"></div>
        <h2 className="text-center poppins-font text-3xl font-bold">
          FAQs
        </h2>
        <div className="h-px w-10 bg-black ml-1"></div>
      </div>
     <div className="flex justify-center w-full px-8 pb-8  md:px-0">
      <Accordion collapseAll>
        <Accordion.Panel>
          <Accordion.Title>What is FireEyes?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, dolore.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>Is there a Figma file available?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, quod.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            what are the Subscription plans, Is it montly or annually?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, ullam.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
      </div>
      </div>
    </div>
  );
};

export default Features;
