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
	ReactJs: a('react.svg'),
	Python: a('python.png'),
	NodeJs: a('node.png'),
	Svelte: a('svelte.png'),
	JavaScript: a('js.png'),
	Quasar: a('quasar.svg'),
	Java: a('java.png'),
	Android: a('android.jpeg'),
	PostgreSQL: a('postgres.png'),
	Firebase: a('firebase.png'),
	Sass: a('sass.png'),
	MongoDB: a('mongodb.svg'),
	Redis: a('redis.svg'),
	HTML: a('html.svg'),
	CSS: a('css.svg'),
	Nuxt: a('nuxt.png'),
	Vite: a('vite.png'),
	Jest: a('jest.png'),
	Charter: a('charter.png'),
	Nice: a('nice.png'),
	Datadog: a('datadog.png'),
	GCP: a('gcloud.jpeg'),
	SpringBoot: a('spring-boot.png'),
	MySQL: a('mysql.png'),
	Gunicorn: a('gunicorn.png'),
	Jenkins: a('jenkins.png'),
	Junit: a('junit.png'),
	PyTest: a('pytest.svg'),
	Linux: a('linux.png'),
	Algo: a('algo.png'),
	BNT: a('bnt.png'),
	Ansible: a('ansible.jpeg'),
	Git: a('git.png'),
	GitHub: a('github.jpeg'),
	GitLab: a('gitlab.svg')
};

export default Assets;

let currentTheme: boolean;

theme.subscribe((v) => (currentTheme = v));

export const getAssetURL = (asset: Asset): string => {
	return typeof asset === 'string' ? asset : currentTheme ? asset.dark : asset.light;
};
