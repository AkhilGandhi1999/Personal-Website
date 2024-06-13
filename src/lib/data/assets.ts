import type { Asset } from '$lib/types';
import { theme } from '$lib/stores/theme';

const gh = (file: string) =>
`https://raw.githubusercontent.com/AkhilGandhi1999/Personal-Website/assets/assets/${file}`;

const a = (light: string, dark?: string): Asset =>
	dark ? { dark: gh(dark), light: gh(light) } : gh(light);

const Assets = {
	Profile1: a('profile1.jpeg'),
	Resume: a('resume.pdf'),
	Rule4: a('rule4.jpeg'),
	Profile: a('profile.jpeg'),
	AWS: a('aws.png'),
	Bootstrap: a('bootstrap.svg'),
	C: a('c.svg'),
	Cpp: a('cpp.svg'),
	Celery: a('celery.svg'),
	Django: a('django.svg'),
	FastApi: a('fastapi'),
	Flask: a('flask.jpeg'),
	Go: a('go.svg'),
	Kafka: a('kafka.jpeg'),
	Neo4j: a('neo4j.svg'),
	Nginx: a('nginx.svg'),
	Numpy: a('numpy.svg'),
	Pandas: a('pandas.svg'),
	RabbitMQ: a('rabbitmq.svg'),
	Rust: a('rust.svg', 'rust-dark.png'),
	Scrapy: a('scrapy.png'),
	Selenium: a('selenium.svg'),
	Docker: a('docker.svg'),
	Kubernetes: a('kube.png'),
	Csharp: a('csharp.svg'),
	Xamarin: a('xamarin.svg'),
	TypeScript: a('ts.png'),
	VueJs: a('vue.png'),
	ReactJs: a('react.svg'),
	Dart: a('dart.png'),
	Kotlin: a('kotlin.png'),
	Python: a('python.png'),
	NodeJs: a('node.png'),
	Deno: a('deno.png', 'deno-dark.png'),
	Svelte: a('svelte.png'),
	ExpressJs: a('express.png'),
	JavaScript: a('js.png'),
	Fastify: a('fastify.svg', 'fastify-dark.png'),
	NestJs: a('nest.svg'),
	Quasar: a('quasar.svg'),
	SolidJs: a('solid.svg'),
	Electron: a('electron.png'),
	Flutter: a('flutter.svg'),
	Java: a('java.png'),
	AdonisJs: a('adonis.png'),
	Android: a('android.jpeg'),
	Angular: a('angular.png'),
	PostgreSQL: a('postgres.png'),
	Firebase: a('firebase.png'),
	Sass: a('sass.png'),
	Unknown: a('no-img.svg'),
	MongoDB: a('mongodb.svg'),
	Redis: a('redis.svg'),
	Tailwind: a('tailwind.svg'),
	HTML: a('html.svg'),
	Premiere: a('premiere.svg'),
	Photoshop: a('photoshop.svg'),
	CSS: a('css.svg'),
	AfterEffects: a('after-effects.svg'),
	Illustrator: a('illustrator.svg'),
	Nuxt: a('nuxt.png'),
	Vite: a('vite.png'),
	Vitest: a('vitest.png'),
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
