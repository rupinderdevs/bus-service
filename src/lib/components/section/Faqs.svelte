<script>
  import platformCompare from "../../images/platformCompare.png";
  import { faqData } from "$lib/data";
  import TabContentItem from "../tabs/TabContentItem.svelte";
  import TabHead from "../tabs/TabHead.svelte";
  import TabHeadItem from "../tabs/TabHeadItem.svelte";
  import TabWrapper from "../tabs/TabWrapper.svelte";
  import SvgIcon from "$lib/components/ui/SvgIcon.svelte";
  import Accrodion from "../accordion/Accrodion.svelte";

  let activeTabValue = 1;
  let activeKey = "";

  const handleClick = (/** @type {number} */ tabValue) => () =>
    (activeTabValue = tabValue);

  const handleOpenAccordion = (/** @type {String} */ key) => {
    if (activeKey === key) {
      activeKey = "";
    } else {
      activeKey = key;
    }
  };
</script>

<section class="p-9 flex flex-col items-center justify-center w-full">
  <h2 class="pt-9 text-xl lg:text-5xl">Frequently Asked Questions</h2>
  <p class="font-light text-xl py-4">
    Ask us anything, we would definitely answer!
  </p>
  <TabWrapper>
    <TabHead
      divClass="flex justify-center py-2"
      class="!p-0 w-fit rounded-full bg-primary-light"
    >
      {#each faqData as { title, data }, index (title)}
        <TabHeadItem
          id={index + 1}
          active={activeTabValue === index + 1}
          on:click={handleClick(index + 1)}
        >
          {title}
        </TabHeadItem>
      {/each}
    </TabHead>
    {#each faqData as { title, data }, index (title)}
      <TabContentItem id={index + 1} {activeTabValue}>
        <div class="px-10">
          {#each data as { head, desc }, index}
            <Accrodion
              {handleOpenAccordion}
              key="active_{index}"
              accordionClass="bg-gray-bg m-2 rounded-md p-4"
              {activeKey}
            >
              <div class="flex items-center gap-2" slot="head">
                <SvgIcon name="HandIcon" class="h-5" />{head}
              </div>
              <div slot="details">
                <p>{desc}</p>
              </div>
            </Accrodion>
          {/each}
        </div>
      </TabContentItem>
    {/each}
  </TabWrapper>
</section>
