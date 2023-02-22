{pkgs, ...}: {
  packages = with pkgs; [nodePackages.pnpm];

  languages.javascript.enable = true;
}
