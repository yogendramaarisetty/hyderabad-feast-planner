import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Upload, X, Image as ImageIcon } from "lucide-react";

interface LogoUploadProps {
  onLogoChange: (logoUrl: string) => void;
  currentLogo?: string;
}

const LogoUpload = ({ onLogoChange, currentLogo }: LogoUploadProps) => {
  const [logoUrl, setLogoUrl] = useState(currentLogo || "");
  const [isUploading, setIsUploading] = useState(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setIsUploading(true);
      
      // Create a simple file reader to convert to data URL
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setLogoUrl(result);
        onLogoChange(result);
        setIsUploading(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const url = event.target.value;
    setLogoUrl(url);
    if (url) {
      onLogoChange(url);
    }
  };

  const clearLogo = () => {
    setLogoUrl("");
    onLogoChange("");
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-3">
        <ImageIcon className="w-5 h-5 text-burgundy" />
        <h3 className="text-lg font-heading font-semibold text-charcoal">Logo Upload</h3>
      </div>
      
      {/* Current Logo Preview */}
      {logoUrl && (
        <div className="relative inline-block">
          <img
            src={logoUrl}
            alt="Current logo"
            className="w-24 h-24 object-contain border-2 border-burgundy/20 rounded-xl"
          />
          <button
            onClick={clearLogo}
            className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Upload Options */}
      <div className="space-y-3">
        {/* File Upload */}
        <div>
          <label className="block text-sm font-medium text-charcoal mb-2">
            Upload Logo File
          </label>
          <div className="flex items-center space-x-3">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              className="hidden"
              id="logo-upload"
              disabled={isUploading}
            />
            <label
              htmlFor="logo-upload"
              className="flex items-center space-x-2 px-4 py-2 bg-burgundy/10 text-burgundy rounded-lg cursor-pointer hover:bg-burgundy/20 transition-colors disabled:opacity-50"
            >
              <Upload className="w-4 h-4" />
              <span>{isUploading ? "Uploading..." : "Choose File"}</span>
            </label>
          </div>
        </div>

        {/* URL Input */}
        <div>
          <label className="block text-sm font-medium text-charcoal mb-2">
            Or Enter Image URL
          </label>
          <div className="flex space-x-2">
            <input
              type="url"
              value={logoUrl}
              onChange={handleUrlChange}
              placeholder="https://example.com/logo.png"
              className="flex-1 px-3 py-2 border border-burgundy/20 rounded-lg focus:border-burgundy focus:outline-none"
            />
            {logoUrl && (
              <Button
                onClick={clearLogo}
                variant="outline"
                size="sm"
                className="px-3"
              >
                Clear
              </Button>
            )}
          </div>
        </div>
      </div>

      <p className="text-xs text-muted-foreground">
        Recommended size: 200x200px or larger. Supported formats: JPG, PNG, SVG
      </p>
    </div>
  );
};

export default LogoUpload;
