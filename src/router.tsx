import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Frame } from './screens/Frame/Frame';
import { ChatHistory } from './screens/ChatHistory/ChatHistory';
import { Settings } from './screens/Settings/Settings';
import { Pricing } from './screens/Pricing/Pricing';
import { Conversation } from './screens/Conversation/Conversation';
import { ExamplePrompts } from './screens/ExamplePrompts/ExamplePrompts';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Frame />,
  },
  {
    path: '/chat-history',
    element: <ChatHistory />,
  },
  {
    path: '/settings',
    element: <Settings />,
  },
  {
    path: '/pricing',
    element: <Pricing />,
  },
  {
    path: '/conversation/:id',
    element: <Conversation />,
  },
  {
    path: '/example-prompts',
    element: <ExamplePrompts />,
  },
]);
