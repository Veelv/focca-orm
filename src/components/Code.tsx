import { Copy } from "lucide-react";
import { useState } from "react";

type CodeProps = {
  label?: string;
  code: string;
} | {
  tabs: { label: string; code: string }[];
};

const Code: React.FC<CodeProps> = (props) => {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);

  const isTabbed = "tabs" in props;
  const currentCode = isTabbed ? props.tabs[activeTab].code : props.code;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(currentCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full bg-gray-900 text-white p-4 rounded-lg">
      {isTabbed && props.tabs.length > 1 && (
        <div className="flex border-b border-gray-700 mb-2">
          {props.tabs.map((tab, index) => (
            <button
              key={index}
              className={`px-4 py-2 text-sm ${activeTab === index ? "border-b-2 border-white" : "text-gray-400"}`}
              onClick={() => setActiveTab(index)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      )}
      <div className="relative">
        <pre className="overflow-x-auto text-sm font-mono p-2 bg-gray-800 rounded">{currentCode}</pre>
        <button
          onClick={copyToClipboard}
          className="absolute top-2 right-2 text-gray-400 hover:text-white transition"
          title={copied ? "Copiado!" : "Copiar"}
        >
          <Copy size={18} />
        </button>
      </div>
    </div>
  );
};

export default Code;
