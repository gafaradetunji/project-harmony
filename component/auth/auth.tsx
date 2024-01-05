import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

export const Auth = <propsWithChildren extends { children: React.ReactNode }>(
  WrappedComponent: React.ComponentType<propsWithChildren>,
) => {
  const AuthWrapper: React.FC<propsWithChildren> = (props) => {
    const router = useRouter();

    useEffect(() => {
      const token = localStorage.getItem("tokenize");

      if (!token) {
        router.push("/");
        // localStorage.removeItem('tokenize');
      }
    }, [router]);
    return <WrappedComponent {...props} />;
  };
  return AuthWrapper;
};
