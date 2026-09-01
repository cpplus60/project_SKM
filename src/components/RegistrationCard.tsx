import { ShowName } from "@/components/ShowName";

type RegistrationCardProps = {
  showName: string;
  seasonLabel: string;
  participantName: string;
  registrationNumber: string;
};

export function RegistrationCard({
  showName,
  seasonLabel,
  participantName,
  registrationNumber,
}: RegistrationCardProps) {
  return (
    <div className="mx-auto w-full max-w-copy rounded-xl border border-gold/60 bg-panel p-8">
      <p className="text-grey">{seasonLabel}</p>
      <ShowName className="mt-2 block text-3xl">{showName}</ShowName>
      <div className="mt-8 border-t border-border pt-8">
        <p className="text-grey">Registered participant</p>
        <p className="mt-2 text-xl text-offwhite">{participantName}</p>
      </div>
      <div className="mt-6">
        <p className="text-grey">Registration number</p>
        <p className="mt-2 font-mono text-2xl text-gold">{registrationNumber}</p>
      </div>
    </div>
  );
}
