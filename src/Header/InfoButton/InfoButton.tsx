import { MdInfoOutline as InfoIcon } from "react-icons/md";
import { useShowDialog } from "../../dialogs";

const InfoButton = () => {
  const show = useShowDialog();

  return (
    <button onClick={() => show("about")} aria-label="om Stavehumle">
      <InfoIcon />
    </button>
  );
};

export default InfoButton;
