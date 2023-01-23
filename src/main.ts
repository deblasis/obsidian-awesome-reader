import 'src/styles.css'
import {App, Plugin, PluginSettingTab} from 'obsidian';


// Remember to rename these classes and interfaces!
interface AwesomeReaderPluginSettings {

}

const DEFAULT_SETTINGS: AwesomeReaderPluginSettings = {}

export default class AwesomeReaderPlugin extends Plugin {
	settings: AwesomeReaderPluginSettings;

	async onload() {
		await this.loadSettings();
		// This adds a settings tab so the user can configure various aspects of the plugin
		this.addSettingTab(new AwesomeReaderSettingTab(this.app, this));


	}

	onunload() {

	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
		console.log(this.settings)
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}

class AwesomeReaderSettingTab extends PluginSettingTab {
	plugin: AwesomeReaderPlugin;

	constructor(app: App, plugin: AwesomeReaderPlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const {containerEl} = this;
		containerEl.empty();

	}
}
