import { useCallback } from "react";
import { useNavigate, useParams } from "react-router";
import DatePicker from "./DatePicker";
import { useGameId } from "../../hooks";
import { Modal } from "../../spa-components/Modal";
import { useDialog } from "../../dialogs";

const CalendarDialog = () => {
  const { lang } = useParams();
  const navigate = useNavigate();
  const { gameId } = useGameId();

  const { open, hide } = useDialog("date");

  const onNewDatePicked = useCallback(
    (gameId: string) => {
      hide();
      navigate(`/${lang}/${gameId}`);
    },
    [hide, navigate, lang],
  );

  return (
    <Modal open={open} title="Velg dato" onClose={() => hide()}>
      <div style={{ width: "min-content", margin: "0 auto" }}>
        <DatePicker onChange={onNewDatePicked} gameId={gameId} />
      </div>
    </Modal>
  );
};

export default CalendarDialog;
