import { ECS } from 'raxis';
import { HostPlugin, HostSettings } from 'raxis-server';

new ECS()
	.insertPlugin(HostPlugin)
	.insertResource(
		new HostSettings({
			port: 5100,
			cb: (p) => console.log(`Listing on port ${p}`),
		})
	)
	.run();
