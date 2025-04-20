import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../config/chakraTheme";
import { SWRConfig } from "swr";
import { useToast } from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import Fonts from "../components/Fonts";
import PageLoader from "../components/PageLoader";

const toastId = "elven-tools-error-toast";

const GokaiDapp = ({ Component, pageProps }: AppProps) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // Set the language after hydration to prevent hydration mismatch
    document.documentElement.lang = "en";
    setIsHydrated(true); // Set hydration to true after initial render
  }, []);

  const toast = useToast();

  const handleErrorToast = useCallback(() => {
    if (!toast.isActive(toastId)) {
      toast({
        id: toastId,
        variant: "subtle",
        title: "API error!",
        description:
          "The API is not responding at the moment. Please try later. Also, make sure that you are using the proper chain type when connecting locally",
        status: "error",
        duration: 10000,
        isClosable: true,
      });
    }
  }, [toast]);

  // Prevent rendering child components until hydration is complete
  if (!isHydrated) {
    return (
      <ChakraProvider theme={theme}>
        <PageLoader />
      </ChakraProvider>
    );
  }

  return (
    <SWRConfig value={{ onError: handleErrorToast }}>
      <ChakraProvider theme={theme}>
        <PageLoader />
        <Fonts />
        <Component {...pageProps} />
      </ChakraProvider>
    </SWRConfig>
  );
};

export default GokaiDapp;
