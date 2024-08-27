import {useState} from 'react'
import {EXAMPLES} from '../data.js'; 
import TabButton from './TabButton.jsx';
import Section from './Section.jsx';
import Tabs from './Tabs.jsx';

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState();
    function handleSelect(selectedButton) {
        // selectedButton => 'component', 'jsx', 'props', or 'state'
        setSelectedTopic(selectedButton);
        console.log(selectedTopic);
    } ;

    let tabContent = (!selectedTopic ? (
        <p>Please select a topic</p>
      ) : (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>
            {EXAMPLES[selectedTopic].code}
          </code>
        </pre>
      </div>
    ));

    return (
        <Section title="Examples" id="examples">
            <Tabs buttonContainer="menu" 
              buttons={<>
                <TabButton 
              isSelected={selectedTopic === 'components'} 
              onSelect={() => handleSelect('components')}
              >Component
              </TabButton>
              <TabButton 
              isSelected={selectedTopic === 'jsx'}
              onSelect={() => handleSelect('jsx')}
              >JSX
              </TabButton>
              <TabButton 
              isSelected={selectedTopic === 'props'}
              onSelect={() => handleSelect('props')}
              >Props
              </TabButton>
              <TabButton 
              isSelected={selectedTopic === 'state'}
              onSelect={() => handleSelect('state')}
              >State
              </TabButton>
                </>}> {tabContent}
            </Tabs>
          </Section>
    );
}