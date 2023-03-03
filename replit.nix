{ pkgs }: {
	deps = [
		#pkgs.openssh_with_kerberos
  pkgs.openssh
  pkgs.unzip
  pkgs.nodejs-16_x
		pkgs.nodePackages.typescript-language-server
		pkgs.yarn
		pkgs.replitPackages.jest
	];
}