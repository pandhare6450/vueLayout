<template>
 <div class="filter_tab">
	<div class="Box-root Box-divider--light-bottom-1 Padding-all--8" style="padding: 5px 5px 10px 9px;">
		<label> <input type="checkbox">
			Available
			Date</label>
	</div>
	<div >
		<div class="Box-root Box-background--gray50 Box-divider--light-bottom-1 Margin-top--0 Padding-all--12"
			style="max-height: 400px; overflow: hidden; transition: max-height 0.3s ease 0s, padding 0.3s ease 0s;">
			<span
				class="Text-color--gray Text-fontSize--12 Text-numericSpacing--proportional Text-typeface--base Text-wrap--wrap Text-display--inline">
				<div class="Box-root Flex-flex Flex-alignItems--center Flex-direction--row">
					<div class="Box-root " style="flex-grow: 1;">
						<span>
							<div
								class="PressableCore PressableCore--cursor--text PressableCore--height--small PressableCore--radius--all PressableCore--width PressableCore--width--maximized PressableField TextInput Box-root Flex-inlineFlex pdboxshadow"
								>
								<div class="PressableCore-base Box-root">

									<VueDatePicker   />
								</div>
							</div>
						</span>
					</div>
					<div style="margin:3px 7px 4px 5px;"> to </div>
					<div class="Box-root " style="flex-grow: 1;">
						<span>
							<div
								class="AvDateTo PressableCore PressableCore--cursor--text PressableCore--height--small PressableCore--radius--all PressableCore--width PressableCore--width--maximized PressableField TextInput Box-root Flex-inlineFlex pdboxshadow"
								>
								<div class="PressableCore-base Box-root">

									<VueDatePicker   />
                  </div>
							</div>
						</span>
					</div>
				</div>
			</span>
		</div>
	</div>
</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const date = ref();

// For demo purposes assign range from the current date
onMounted(() => {
  const startDate = new Date();
  const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
  date.value = [startDate, endDate];
})
</script>
