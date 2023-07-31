import { ECS } from 'raxis';
import { HostPlugin, HostSettings } from 'raxis-server';

new ECS()
	.insertPlugin(HostPlugin)
	.insertResource(
		new HostSettings({
			port: 5100,
			cb: (p) => console.log(`Listening on port ${p}`),
		})
	)
	.run();
