import * as React from 'react';
import {Timeline, TimelineEvent} from 'react-event-timeline'

export interface IAppProps {
}

export interface IAppState {
}

export default class TimelineComp extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);

    this.state = {
    }
    // this.data = [
    //     {time: '09:00', title: 'Event 1', description: 'Event 1 Description'},
    //     {time: '10:45', title: 'Event 2', description: 'Event 2 Description'},
    //     {time: '12:00', title: 'Event 3', description: 'Event 3 Description'},
    //     {time: '14:00', title: 'Event 4', description: 'Event 4 Description'},
    //     {time: '16:30', title: 'Event 5', description: 'Event 5 Description'}
    //   ]
  }

  public render() {
    return (
      <div>
         <Timeline>
            <TimelineEvent title="John Doe sent a SMS"
                           createdAt="2016-09-12 10:06 PM"
                           icon=""
                           iconStyle={{'color': 'red'}}
            >
                I received the payment for $543. Should be shipping the item within a couple of hours.
            </TimelineEvent>
            <TimelineEvent
                title="You sent an email to John Doe"
                createdAt="2016-09-11 09:06 AM"
                icon={<i className="material-icons md-18">email</i>}
            >
                Like we talked, you said that you would share the shipment details? This is an urgent order and so I
                    am losing patience. Can you expedite the process and pls do share the details asap. Consider this a
                    gentle reminder if you are on track already!
            </TimelineEvent>
    </Timeline>
      </div>
    );
  }
}
