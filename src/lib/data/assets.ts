import type { Asset } from '$lib/types';
import { theme } from '$lib/stores/theme';
import { base } from '$app/paths';

// Images live in static/images/ and are served from this site.
const img = (file: string) => `${base}/images/${file}`;

const a = (light: string, dark?: string): Asset =>
	dark ? { dark: img(dark), light: img(light) } : img(light);

const Assets = {
	Terraform: a('terraform.svg'),
	ArgoCD: a('argocd.svg'),
	Helm: a('helm.svg'),
	Istio: a('istio.svg'),
	Prometheus: a('prometheus.svg'),
	Grafana: a('grafana.svg'),
	Splunk: a('splunk.svg'),
	GitHubActions: a('githubactions.svg'),
	Packer: a('packer.svg'),
	Bash: a('bash.svg'),
	Profile1: a('profile1.jpeg'),
	AWS: a('aws.png'),
	Django: a('django.svg'),
	Flask: a('flask.jpg'),
	Go: a('go.svg'),
	Kafka: a('kafka.jpeg'),
	Nginx: a('nginx.svg'),
	Docker: a('docker.svg'),
	Kubernetes: a('kube.png'),
	TypeScript: a('ts.png'),
	VueJs: a('vue.png'),
	Python: a('python.png'),
	Svelte: a('svelte.png'),
	JavaScript: a('js.png'),
	Quasar: a('quasar.svg'),
	Java: a('java.png'),
	Android: a('android.jpeg'),
	PostgreSQL: a('postgres.png'),
	Redis: a('redis.svg'),
	Jest: a('jest.png'),
	Charter: a('charter.png'),
	// Pinterest logo from Simple Icons (CC0), simple-icons@13.21.0, brand red.
	Pinterest: a('pinterest.svg'),
	Nice: a('nice.png'),
	Datadog: a('datadog.png'),
	GCP: a('gcloud.jpeg'),
	MySQL: a('mysql.png'),
	Jenkins: a('jenkins.png'),
	Linux: a('linux.png'),
	Ansible: a('ansible.jpeg'),
};

export default Assets;

let currentTheme: boolean;

theme.subscribe((v) => (currentTheme = v));

export const getAssetURL = (asset: Asset): string => {
	return typeof asset === 'string' ? asset : currentTheme ? asset.dark : asset.light;
};
