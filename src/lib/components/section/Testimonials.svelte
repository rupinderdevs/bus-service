<script lang="ts">
  import Carousel from "svelte-carousel";
  import { browser } from "$app/environment";
  import insuredImage from "$lib/images/insuredImage.png";
  import SvgIcon from "$lib/components/ui/SvgIcon.svelte";

  let carousel: Carousel;

  const partners = [
    {
      //   src: bajaj,
      alt: "Bajaj",
    },
    {
      //   src: careHealth,
      alt: "Care Health",
    },
    {
      //   src: cholams,
      alt: "Cholams",
    },
    {
      //   src: future,
      alt: "Future",
    },
    {
      //   src: digit,
      alt: "Digit",
    },
  ];
</script>

<section class="py-6 md:py-8 lg:py-10 space-y-4 xl:px-18 px-4 bg-primary-light">
  <h2 class="py-4 text-xl lg:text-5xl text-center">
    Happily Insured @Ellisops
  </h2>

  <div>
    {#if browser}
      <Carousel
        bind:this={carousel}
        particlesToShow={1}
        arrows={false}
        dots={true}
        autoplay={true}
        infinite={true}
        autoplayDuration={2000}
      >
        {#each partners as { src, alt }}
          <div class="flex w-full">
            <div class="">
              <img src={insuredImage} alt="test" />
            </div>
            <div
              class="w-full bg-white rounded-md p-10 flex items-center justify-center flex-col"
            >
              <i class="text-2xl font-light">
                <blockquote>
                  <span id="quoted-data">
                    I renewed royal Sundaram car Insuance policy by following
                    the easy steps given on
                  </span>
                </blockquote>
              </i>
              <p class="text-2xl">Arun Kumar</p>
            </div>
          </div>
        {/each}
      </Carousel>
    {/if}
  </div>
</section>

<style>
  blockquote {
    border: none;
    font-family: Georgia, "Times New Roman", Times, serif;
    margin-bottom: 30px;
    quotes: "\201C" "\201D" "\2018" "\2019";
  }
  blockquote:before {
    content: open-quote;
    font-weight: bold;
    font-size: 40px;
    line-height: 110%;
    color: #cbdeee;
  }
  blockquote:after {
    content: close-quote;
    font-weight: bold;
    font-size: 40px;
    line-height: 110%;
    color: #cbdeee;
    position: absolute;
    top: 100px !important;
  }
</style>
