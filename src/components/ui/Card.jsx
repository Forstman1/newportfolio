import { Icons } from "../icons";
import { Image } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";

export default function Card({
  title,
  description,
  image,
  link,
  index,
  ref,
  isInView,
  playstore,
  appstore,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const trimDescription =
    description.length > 150 ? description.slice(0, 150) + "..." : description;
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, scale: 0.8, y: 30 }}
      animate={
        isInView
          ? { opacity: 1, scale: 1, y: 0 }
          : { opacity: 0, scale: 0.8, y: 30 }
      }
      transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
      whileHover={{ scale: 1.02, y: -5 }}
      onClick={onOpen}
      className=" w-[90%] md:w-[70%] lg:w-[560px] h-[500px] flex-col items-center justify-around  bg-quaternary  opacity-100 border-solid border-[2px]    border-[#292929]   border-t-1 border-b-0 border-l-0 border-r-0 hover:bg-[#292929] rounded-[24px]  group/card duration-500 cursor-pointer"
    >
      <div className="flex-col flex items-center justify-around p-2 gap-3 w-full h-full ">
        <div className="flex justify-between items-center w-[90%]">
          <div className="flex flex-col">
            <p className="text-white text-[18px] md:text-[24px]">{title}</p>
            <p className="text-[14px] text-[#858585] ">{trimDescription}</p>
          </div>
          <div className="flex items-center ">
            <div className=" w-[28px] lg:w-[32px]   h-[28px] lg:h-[32px] relative rounded-full bg-black right-[-15px] group-hover/card:bg-tertiary duration-500"></div>
            <Icons.Arrow className="w-[40px] h-[32px] lg:w-[50px] text-[#525252] lg:h-[42px] relative  left-[0px] group-hover/card:left-[5px]  group-hover/card:text-white duration-500 " />
          </div>
        </div>

        <div className="w-[90%] h-[382px] rounded-lg group-hover/card:rotate-[3deg] duration-500">
          <Image
            src={image}
            alt="Segun Adebayo"
            className="w-full h-[95%] rounded-lg"
          />
        </div>
      </div>

      <Modal isOpen={isOpen} onClose={onClose} isCentered size={"xl"}>
        <ModalOverlay />
        <ModalContent className=" w-full border-solid border-[2px] border-[#292929]  rounded-lg ">
          <ModalHeader Icons className="bg-primary text-white ">
            {title}
          </ModalHeader>
          <ModalCloseButton className=" text-white " />
          <ModalBody className="bg-primary gap-4 flex flex-col">
            <Image
              src={image}
              alt="Segun Adebayo"
              className="w-full h-full rounded-lg"
            />
            <p className="text-[14px] font-medium text-white ">{description}</p>
          </ModalBody>

          <ModalFooter className="bg-primary">
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            {link && (
              <a href={link} target="_blank" rel="noopener noreferrer">
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  See Code
                </Button>
              </a>
            )}
            {playstore && (
              <a href={playstore} target="_blank" rel="noopener noreferrer">
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  See in Play store
                </Button>
              </a>
            )}
            {appstore && (
              <a href={appstore} target="_blank" rel="noopener noreferrer">
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  See in App store
                </Button>
              </a>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </motion.div>
  );
}
