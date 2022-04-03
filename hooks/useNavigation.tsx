import { useRouter } from "next/router";

interface UseNavigation {
  min: number;
  max: number;
}

const useNavigation = ({ min, max }: UseNavigation) => {
  const router = useRouter();
  const { id: currentId } = router.query;

  const handleNext = () => {
    if (Number(currentId) < max) {
      router.push(`/pokemon/${Number(currentId) + 1}`);
    }
  };

  const handlePrev = () => {
    if (Number(currentId) > min) {
      router.push(`/pokemon/${Number(currentId) - 1}`);
    }
  };

  return {
    handleNext,
    handlePrev,
    currentId
  };
};

export default useNavigation;
