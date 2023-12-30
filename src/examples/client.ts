import {CurrentRMSClient} from "../client";

const client = new CurrentRMSClient('1', 'EyXX1uJQjg9m_RjWjizW', 'hs-hire')


async function test() {
    const {opportunity, errors} = await client.opportunity.get('1')
}

test()